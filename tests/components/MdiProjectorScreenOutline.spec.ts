
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorScreenOutline from "../../src/components/MdiProjectorScreenOutline.vue";

test("MdiProjectorScreenOutline snapshot", () => {
  const wrapper = mount(MdiProjectorScreenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
