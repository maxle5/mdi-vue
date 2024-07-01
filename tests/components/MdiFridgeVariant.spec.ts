
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeVariant from "../../src/components/MdiFridgeVariant.vue";

test("MdiFridgeVariant snapshot", () => {
  const wrapper = mount(MdiFridgeVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
