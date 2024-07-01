
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotherNurse from "../../src/components/MdiMotherNurse.vue";

test("MdiMotherNurse snapshot", () => {
  const wrapper = mount(MdiMotherNurse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
