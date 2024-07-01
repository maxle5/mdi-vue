
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmartCardReaderOutline from "../../src/components/MdiSmartCardReaderOutline.vue";

test("MdiSmartCardReaderOutline snapshot", () => {
  const wrapper = mount(MdiSmartCardReaderOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
