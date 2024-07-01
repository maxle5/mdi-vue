
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenorahFire from "../../src/components/MdiMenorahFire.vue";

test("MdiMenorahFire snapshot", () => {
  const wrapper = mount(MdiMenorahFire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
