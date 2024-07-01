
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandslide from "../../src/components/MdiLandslide.vue";

test("MdiLandslide snapshot", () => {
  const wrapper = mount(MdiLandslide, {});
  expect(wrapper.html()).toMatchSnapshot();
});
