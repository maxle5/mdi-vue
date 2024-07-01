
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImagePlus from "../../src/components/MdiFileImagePlus.vue";

test("MdiFileImagePlus snapshot", () => {
  const wrapper = mount(MdiFileImagePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
