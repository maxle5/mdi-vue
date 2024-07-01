
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumbleBundle from "../../src/components/MdiHumbleBundle.vue";

test("MdiHumbleBundle snapshot", () => {
  const wrapper = mount(MdiHumbleBundle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
