
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLatitude from "../../src/components/MdiLatitude.vue";

test("MdiLatitude snapshot", () => {
  const wrapper = mount(MdiLatitude, {});
  expect(wrapper.html()).toMatchSnapshot();
});
