
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPenguin from "../../src/components/MdiPenguin.vue";

test("MdiPenguin snapshot", () => {
  const wrapper = mount(MdiPenguin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
