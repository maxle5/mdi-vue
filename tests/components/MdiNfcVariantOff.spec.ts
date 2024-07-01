
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNfcVariantOff from "../../src/components/MdiNfcVariantOff.vue";

test("MdiNfcVariantOff snapshot", () => {
  const wrapper = mount(MdiNfcVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
