
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeGroupRemove from "../../src/components/MdiHomeGroupRemove.vue";

test("MdiHomeGroupRemove snapshot", () => {
  const wrapper = mount(MdiHomeGroupRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
