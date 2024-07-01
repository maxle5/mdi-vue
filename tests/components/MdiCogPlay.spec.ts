
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogPlay from "../../src/components/MdiCogPlay.vue";

test("MdiCogPlay snapshot", () => {
  const wrapper = mount(MdiCogPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
