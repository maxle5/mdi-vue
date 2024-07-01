
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMiniSd from "../../src/components/MdiMiniSd.vue";

test("MdiMiniSd snapshot", () => {
  const wrapper = mount(MdiMiniSd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
