
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaucetVariant from "../../src/components/MdiFaucetVariant.vue";

test("MdiFaucetVariant snapshot", () => {
  const wrapper = mount(MdiFaucetVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
