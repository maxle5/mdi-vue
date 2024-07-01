
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoImage from "../../src/components/MdiVideoImage.vue";

test("MdiVideoImage snapshot", () => {
  const wrapper = mount(MdiVideoImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
