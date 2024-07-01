
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeRemove from "../../src/components/MdiHomeRemove.vue";

test("MdiHomeRemove snapshot", () => {
  const wrapper = mount(MdiHomeRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
