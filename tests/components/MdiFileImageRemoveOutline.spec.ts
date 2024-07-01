
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImageRemoveOutline from "../../src/components/MdiFileImageRemoveOutline.vue";

test("MdiFileImageRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFileImageRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
