
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNfcSearchVariant from "../../src/components/MdiNfcSearchVariant.vue";

test("MdiNfcSearchVariant snapshot", () => {
  const wrapper = mount(MdiNfcSearchVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
