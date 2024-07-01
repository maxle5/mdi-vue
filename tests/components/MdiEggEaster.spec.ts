
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEggEaster from "../../src/components/MdiEggEaster.vue";

test("MdiEggEaster snapshot", () => {
  const wrapper = mount(MdiEggEaster, {});
  expect(wrapper.html()).toMatchSnapshot();
});
