
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPineTreeFire from "../../src/components/MdiPineTreeFire.vue";

test("MdiPineTreeFire snapshot", () => {
  const wrapper = mount(MdiPineTreeFire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
