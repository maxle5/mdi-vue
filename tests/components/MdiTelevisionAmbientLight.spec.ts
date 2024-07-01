
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionAmbientLight from "../../src/components/MdiTelevisionAmbientLight.vue";

test("MdiTelevisionAmbientLight snapshot", () => {
  const wrapper = mount(MdiTelevisionAmbientLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
