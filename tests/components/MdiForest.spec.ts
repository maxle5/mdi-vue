
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForest from "../../src/components/MdiForest.vue";

test("MdiForest snapshot", () => {
  const wrapper = mount(MdiForest, {});
  expect(wrapper.html()).toMatchSnapshot();
});
