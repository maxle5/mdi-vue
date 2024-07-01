
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignatureImage from "../../src/components/MdiSignatureImage.vue";

test("MdiSignatureImage snapshot", () => {
  const wrapper = mount(MdiSignatureImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
