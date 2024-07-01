
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHospitalMarker from "../../src/components/MdiHospitalMarker.vue";

test("MdiHospitalMarker snapshot", () => {
  const wrapper = mount(MdiHospitalMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
