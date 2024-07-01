
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProfessionalHexagon from "../../src/components/MdiProfessionalHexagon.vue";

test("MdiProfessionalHexagon snapshot", () => {
  const wrapper = mount(MdiProfessionalHexagon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
