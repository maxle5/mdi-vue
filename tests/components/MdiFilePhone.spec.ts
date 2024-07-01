
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePhone from "../../src/components/MdiFilePhone.vue";

test("MdiFilePhone snapshot", () => {
  const wrapper = mount(MdiFilePhone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
