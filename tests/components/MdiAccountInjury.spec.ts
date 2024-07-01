
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountInjury from "../../src/components/MdiAccountInjury.vue";

test("MdiAccountInjury snapshot", () => {
  const wrapper = mount(MdiAccountInjury, {});
  expect(wrapper.html()).toMatchSnapshot();
});
