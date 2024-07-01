
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImage from "../../src/components/MdiFileImage.vue";

test("MdiFileImage snapshot", () => {
  const wrapper = mount(MdiFileImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
