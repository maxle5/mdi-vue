
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMeditation from "../../src/components/MdiMeditation.vue";

test("MdiMeditation snapshot", () => {
  const wrapper = mount(MdiMeditation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
