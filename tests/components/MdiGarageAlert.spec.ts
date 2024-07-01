
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGarageAlert from "../../src/components/MdiGarageAlert.vue";

test("MdiGarageAlert snapshot", () => {
  const wrapper = mount(MdiGarageAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
