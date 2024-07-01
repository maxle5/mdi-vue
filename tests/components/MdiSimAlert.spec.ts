
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSimAlert from "../../src/components/MdiSimAlert.vue";

test("MdiSimAlert snapshot", () => {
  const wrapper = mount(MdiSimAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
