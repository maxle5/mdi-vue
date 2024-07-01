
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignatureText from "../../src/components/MdiSignatureText.vue";

test("MdiSignatureText snapshot", () => {
  const wrapper = mount(MdiSignatureText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
