
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusic from "../../src/components/MdiMusic.vue";

test("MdiMusic snapshot", () => {
  const wrapper = mount(MdiMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
