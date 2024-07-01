
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmartCardReader from "../../src/components/MdiSmartCardReader.vue";

test("MdiSmartCardReader snapshot", () => {
  const wrapper = mount(MdiSmartCardReader, {});
  expect(wrapper.html()).toMatchSnapshot();
});
