
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneRing from "../../src/components/MdiPhoneRing.vue";

test("MdiPhoneRing snapshot", () => {
  const wrapper = mount(MdiPhoneRing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
