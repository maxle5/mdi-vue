
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCactus from "../../src/components/MdiCactus.vue";

test("MdiCactus snapshot", () => {
  const wrapper = mount(MdiCactus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
