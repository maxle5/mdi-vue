
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlay from "../../src/components/MdiPlay.vue";

test("MdiPlay snapshot", () => {
  const wrapper = mount(MdiPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
