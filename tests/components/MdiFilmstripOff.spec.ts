
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilmstripOff from "../../src/components/MdiFilmstripOff.vue";

test("MdiFilmstripOff snapshot", () => {
  const wrapper = mount(MdiFilmstripOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
