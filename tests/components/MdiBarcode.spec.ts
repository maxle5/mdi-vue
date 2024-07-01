
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBarcode from "../../src/components/MdiBarcode.vue";

test("MdiBarcode snapshot", () => {
  const wrapper = mount(MdiBarcode, {});
  expect(wrapper.html()).toMatchSnapshot();
});
