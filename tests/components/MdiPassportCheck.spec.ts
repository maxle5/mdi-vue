
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPassportCheck from "../../src/components/MdiPassportCheck.vue";

test("MdiPassportCheck snapshot", () => {
  const wrapper = mount(MdiPassportCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
