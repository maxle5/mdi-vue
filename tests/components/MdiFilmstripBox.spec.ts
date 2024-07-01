
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilmstripBox from "../../src/components/MdiFilmstripBox.vue";

test("MdiFilmstripBox snapshot", () => {
  const wrapper = mount(MdiFilmstripBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
