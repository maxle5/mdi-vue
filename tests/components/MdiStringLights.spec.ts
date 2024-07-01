
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStringLights from "../../src/components/MdiStringLights.vue";

test("MdiStringLights snapshot", () => {
  const wrapper = mount(MdiStringLights, {});
  expect(wrapper.html()).toMatchSnapshot();
});
