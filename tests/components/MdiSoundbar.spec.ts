
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSoundbar from "../../src/components/MdiSoundbar.vue";

test("MdiSoundbar snapshot", () => {
  const wrapper = mount(MdiSoundbar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
