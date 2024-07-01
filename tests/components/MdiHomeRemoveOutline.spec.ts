
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeRemoveOutline from "../../src/components/MdiHomeRemoveOutline.vue";

test("MdiHomeRemoveOutline snapshot", () => {
  const wrapper = mount(MdiHomeRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
