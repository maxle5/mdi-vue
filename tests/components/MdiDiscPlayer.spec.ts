
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiscPlayer from "../../src/components/MdiDiscPlayer.vue";

test("MdiDiscPlayer snapshot", () => {
  const wrapper = mount(MdiDiscPlayer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
