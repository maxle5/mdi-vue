
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUmbrella from "../../src/components/MdiUmbrella.vue";

test("MdiUmbrella snapshot", () => {
  const wrapper = mount(MdiUmbrella, {});
  expect(wrapper.html()).toMatchSnapshot();
});
