
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileStar from "../../src/components/MdiFileStar.vue";

test("MdiFileStar snapshot", () => {
  const wrapper = mount(MdiFileStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
