
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrick from "../../src/components/MdiToyBrick.vue";

test("MdiToyBrick snapshot", () => {
  const wrapper = mount(MdiToyBrick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
