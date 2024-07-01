
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLicense from "../../src/components/MdiLicense.vue";

test("MdiLicense snapshot", () => {
  const wrapper = mount(MdiLicense, {});
  expect(wrapper.html()).toMatchSnapshot();
});
