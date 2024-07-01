
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftDynamics365 from "../../src/components/MdiMicrosoftDynamics365.vue";

test("MdiMicrosoftDynamics365 snapshot", () => {
  const wrapper = mount(MdiMicrosoftDynamics365, {});
  expect(wrapper.html()).toMatchSnapshot();
});
