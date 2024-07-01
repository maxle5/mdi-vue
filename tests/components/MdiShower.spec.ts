
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShower from "../../src/components/MdiShower.vue";

test("MdiShower snapshot", () => {
  const wrapper = mount(MdiShower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
