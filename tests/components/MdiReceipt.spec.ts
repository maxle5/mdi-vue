
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceipt from "../../src/components/MdiReceipt.vue";

test("MdiReceipt snapshot", () => {
  const wrapper = mount(MdiReceipt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
